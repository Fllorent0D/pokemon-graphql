import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { generation_namesCreateInput } from '../generation-names/generation-names-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnegenerationNamesArgs {

    @Field(() => generation_namesCreateInput, {nullable:false})
    @Type(() => generation_namesCreateInput)
    data!: generation_namesCreateInput;
}
