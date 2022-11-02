import React from "react";
import { Component } from "react";
import { SystemParameterList } from "../Components/SystemParameters/SystemParameterList.js";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

export class SystemParameters extends Component {
  render() {
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <SystemParameterList></SystemParameterList>
        </QueryClientProvider>
      </>
    )
  }
}