import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_type_namesCreateInput } from '../contest-type-names/contest-type-names-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnecontestTypeNamesArgs {

    @Field(() => contest_type_namesCreateInput, {nullable:false})
    @Type(() => contest_type_namesCreateInput)
    data!: contest_type_namesCreateInput;
}
