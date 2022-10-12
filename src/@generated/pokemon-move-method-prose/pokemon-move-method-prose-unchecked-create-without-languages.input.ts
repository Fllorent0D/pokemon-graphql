import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class pokemon_move_method_proseUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    pokemon_move_method_id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;
}
