import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { itemsCreateInput } from './items-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneitemsArgs {

    @Field(() => itemsCreateInput, {nullable:false})
    @Type(() => itemsCreateInput)
    data!: itemsCreateInput;
}
