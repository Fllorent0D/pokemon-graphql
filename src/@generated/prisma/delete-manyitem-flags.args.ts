import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flagsWhereInput } from '../item-flags/item-flags-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyitemFlagsArgs {

    @Field(() => item_flagsWhereInput, {nullable:true})
    @Type(() => item_flagsWhereInput)
    where?: item_flagsWhereInput;
}
