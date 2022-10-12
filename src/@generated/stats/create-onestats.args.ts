import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { statsCreateInput } from './stats-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnestatsArgs {

    @Field(() => statsCreateInput, {nullable:false})
    @Type(() => statsCreateInput)
    data!: statsCreateInput;
}
