import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_typesCreateInput } from '../contest-types/contest-types-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnecontestTypesArgs {

    @Field(() => contest_typesCreateInput, {nullable:false})
    @Type(() => contest_typesCreateInput)
    data!: contest_typesCreateInput;
}
