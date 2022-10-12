import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { typesCreateInput } from './types-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnetypesArgs {

    @Field(() => typesCreateInput, {nullable:false})
    @Type(() => typesCreateInput)
    data!: typesCreateInput;
}
