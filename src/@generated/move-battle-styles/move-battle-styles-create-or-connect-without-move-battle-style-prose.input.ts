import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_battle_stylesWhereUniqueInput } from './move-battle-styles-where-unique.input';
import { Type } from 'class-transformer';
import { move_battle_stylesCreateWithoutMove_battle_style_proseInput } from './move-battle-styles-create-without-move-battle-style-prose.input';

@InputType()
export class move_battle_stylesCreateOrConnectWithoutMove_battle_style_proseInput {

    @Field(() => move_battle_stylesWhereUniqueInput, {nullable:false})
    @Type(() => move_battle_stylesWhereUniqueInput)
    where!: move_battle_stylesWhereUniqueInput;

    @Field(() => move_battle_stylesCreateWithoutMove_battle_style_proseInput, {nullable:false})
    @Type(() => move_battle_stylesCreateWithoutMove_battle_style_proseInput)
    create!: move_battle_stylesCreateWithoutMove_battle_style_proseInput;
}
