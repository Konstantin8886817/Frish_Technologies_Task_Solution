import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";
import App from './App';

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data", async () => {
  const fakeCompany = getFakeCompany();

  jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeCompany)
      })
  );


  await act(async () => {
    render(<App />, container);
  });

  expect(container.querySelectorAll('.TeamRow').length).toBe(3);
  expect(container.querySelectorAll('.Step').length).toBe(5);
  expect(container.querySelectorAll('.Step-done').length).toBe(2);

  global.fetch.mockRestore();
});


function getFakeCompany(){
  return JSON.parse(`
  {
    "campaign_instance_id": "a2d6b5fd-df8b-4c45-9bc6-9baa1c5744fd",
    "campaign_name": "Fake company",
    "team_instances": [
      {
        "steps": [
          {
            "status": "done",
            "step_id": "6e507890-da88-4093-9cf0-042d99f6ac33",
            "step_name": "Step 1"
          },
          {
            "status": "in_progress",
            "step_id": "e8309643-7fe8-4738-bf75-1cd05420ca5f",
            "step_name": "Step 2"
          },
          {
            "status": "not_started",
            "step_id": "f35bb097-e39c-4592-91e2-56d266e945ca",
            "step_name": "Step 3"
          }
        ],
        "team_id": "8a9abb02-c44c-4429-97bb-aa2127cba9b6",
        "team_name": "Fake Team A"
      },
      {
        "steps": [
          {
            "status": "in_progress",
            "step_id": "ea9ad0ed-bc4a-4e05-bd93-6d44db62c4c1",
            "step_name": "Step 4"
          }
        ],
        "team_id": "3f5980ff-84e8-41d5-8b93-741e602e14dc",
        "team_name": "Fake Team B"
      },
      {
        "steps": [
          {
            "status": "done",
            "step_id": "4e2401fb-249a-4c48-883d-73f936ff1b06",
            "step_name": "Step 5"
          }
        ],
        "team_id": "19157d58-3003-484f-bc69-f0d1a736fdb8",
        "team_name": "Fake Team c"
      }
    ]
  }
  `);
}
