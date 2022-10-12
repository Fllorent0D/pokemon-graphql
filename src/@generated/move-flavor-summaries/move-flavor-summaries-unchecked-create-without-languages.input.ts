import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class move_flavor_summariesUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => String, {nullable:true})
    flavor_summary?: string;
}
