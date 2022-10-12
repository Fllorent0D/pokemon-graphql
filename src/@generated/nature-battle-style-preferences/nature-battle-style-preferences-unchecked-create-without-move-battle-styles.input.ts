import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class nature_battle_style_preferencesUncheckedCreateWithoutMove_battle_stylesInput {

    @Field(() => Int, {nullable:false})
    nature_id!: number;

    @Field(() => Int, {nullable:false})
    low_hp_preference!: number;

    @Field(() => Int, {nullable:false})
    high_hp_preference!: number;
}
