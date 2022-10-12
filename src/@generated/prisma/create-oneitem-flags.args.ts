import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flagsCreateInput } from '../item-flags/item-flags-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneitemFlagsArgs {

    @Field(() => item_flagsCreateInput, {nullable:false})
    @Type(() => item_flagsCreateInput)
    data!: item_flagsCreateInput;
}
