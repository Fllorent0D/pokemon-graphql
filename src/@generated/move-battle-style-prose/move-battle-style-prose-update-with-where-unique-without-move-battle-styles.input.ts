import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_battle_style_proseWhereUniqueInput } from './move-battle-style-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_battle_style_proseUpdateWithoutMove_battle_stylesInput } from './move-battle-style-prose-update-without-move-battle-styles.input';

@InputType()
export class move_battle_style_proseUpdateWithWhereUniqueWithoutMove_battle_stylesInput {

    @Field(() => move_battle_style_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_battle_style_proseWhereUniqueInput)
    where!: move_battle_style_proseWhereUniqueInput;

    @Field(() => move_battle_style_proseUpdateWithoutMove_battle_stylesInput, {nullable:false})
    @Type(() => move_battle_style_proseUpdateWithoutMove_battle_stylesInput)
    data!: move_battle_style_proseUpdateWithoutMove_battle_stylesInput;
}
