import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_namesCreateInput } from '../item-names/item-names-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneitemNamesArgs {

    @Field(() => item_namesCreateInput, {nullable:false})
    @Type(() => item_namesCreateInput)
    data!: item_namesCreateInput;
}
