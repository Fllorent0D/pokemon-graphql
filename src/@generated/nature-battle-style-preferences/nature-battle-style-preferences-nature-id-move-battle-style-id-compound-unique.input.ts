import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class nature_battle_style_preferencesNature_idMove_battle_style_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    nature_id!: number;

    @Field(() => Int, {nullable:false})
    move_battle_style_id!: number;
}
