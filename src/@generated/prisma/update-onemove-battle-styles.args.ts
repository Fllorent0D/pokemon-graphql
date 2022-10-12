import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_battle_stylesUpdateInput } from '../move-battle-styles/move-battle-styles-update.input';
import { Type } from 'class-transformer';
import { move_battle_stylesWhereUniqueInput } from '../move-battle-styles/move-battle-styles-where-unique.input';

@ArgsType()
export class UpdateOnemoveBattleStylesArgs {

    @Field(() => move_battle_stylesUpdateInput, {nullable:false})
    @Type(() => move_battle_stylesUpdateInput)
    data!: move_battle_stylesUpdateInput;

    @Field(() => move_battle_stylesWhereUniqueInput, {nullable:false})
    @Type(() => move_battle_stylesWhereUniqueInput)
    where!: move_battle_stylesWhereUniqueInput;
}
