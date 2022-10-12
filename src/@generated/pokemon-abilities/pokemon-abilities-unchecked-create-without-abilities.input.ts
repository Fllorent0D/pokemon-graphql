import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class pokemon_abilitiesUncheckedCreateWithoutAbilitiesInput {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Boolean, {nullable:false})
    is_dream!: boolean;

    @Field(() => Int, {nullable:false})
    slot!: number;
}
