import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_battle_stylesUpdateWithoutMove_battle_style_proseInput } from './move-battle-styles-update-without-move-battle-style-prose.input';
import { Type } from 'class-transformer';
import { move_battle_stylesCreateWithoutMove_battle_style_proseInput } from './move-battle-styles-create-without-move-battle-style-prose.input';

@InputType()
export class move_battle_stylesUpsertWithoutMove_battle_style_proseInput {

    @Field(() => move_battle_stylesUpdateWithoutMove_battle_style_proseInput, {nullable:false})
    @Type(() => move_battle_stylesUpdateWithoutMove_battle_style_proseInput)
    update!: move_battle_stylesUpdateWithoutMove_battle_style_proseInput;

    @Field(() => move_battle_stylesCreateWithoutMove_battle_style_proseInput, {nullable:false})
    @Type(() => move_battle_stylesCreateWithoutMove_battle_style_proseInput)
    create!: move_battle_stylesCreateWithoutMove_battle_style_proseInput;
}
