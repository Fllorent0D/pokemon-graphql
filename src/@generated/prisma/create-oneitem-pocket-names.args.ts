import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_pocket_namesCreateInput } from '../item-pocket-names/item-pocket-names-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneitemPocketNamesArgs {

    @Field(() => item_pocket_namesCreateInput, {nullable:false})
    @Type(() => item_pocket_namesCreateInput)
    data!: item_pocket_namesCreateInput;
}
