import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class item_proseUncheckedCreateWithoutItemsInput {

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:true})
    short_effect?: string;

    @Field(() => String, {nullable:true})
    effect?: string;
}
