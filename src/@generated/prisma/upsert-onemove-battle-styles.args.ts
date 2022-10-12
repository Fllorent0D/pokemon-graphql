import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_battle_stylesWhereUniqueInput } from '../move-battle-styles/move-battle-styles-where-unique.input';
import { Type } from 'class-transformer';
import { move_battle_stylesCreateInput } from '../move-battle-styles/move-battle-styles-create.input';
import { move_battle_stylesUpdateInput } from '../move-battle-styles/move-battle-styles-update.input';

@ArgsType()
export class UpsertOnemoveBattleStylesArgs {

    @Field(() => move_battle_stylesWhereUniqueInput, {nullable:false})
    @Type(() => move_battle_stylesWhereUniqueInput)
    where!: move_battle_stylesWhereUniqueInput;

    @Field(() => move_battle_stylesCreateInput, {nullable:false})
    @Type(() => move_battle_stylesCreateInput)
    create!: move_battle_stylesCreateInput;

    @Field(() => move_battle_stylesUpdateInput, {nullable:false})
    @Type(() => move_battle_stylesUpdateInput)
    update!: move_battle_stylesUpdateInput;
}
