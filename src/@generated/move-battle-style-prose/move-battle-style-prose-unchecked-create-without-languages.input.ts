import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class move_battle_style_proseUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    move_battle_style_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;
}
