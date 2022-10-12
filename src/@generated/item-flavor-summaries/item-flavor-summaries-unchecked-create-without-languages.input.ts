import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class item_flavor_summariesUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    item_id!: number;

    @Field(() => String, {nullable:true})
    flavor_summary?: string;
}
