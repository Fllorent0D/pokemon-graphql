import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { type_namesCreateInput } from '../type-names/type-names-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnetypeNamesArgs {

    @Field(() => type_namesCreateInput, {nullable:false})
    @Type(() => type_namesCreateInput)
    data!: type_namesCreateInput;
}
