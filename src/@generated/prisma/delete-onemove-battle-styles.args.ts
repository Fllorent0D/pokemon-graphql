import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_battle_stylesWhereUniqueInput } from '../move-battle-styles/move-battle-styles-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnemoveBattleStylesArgs {

    @Field(() => move_battle_stylesWhereUniqueInput, {nullable:false})
    @Type(() => move_battle_stylesWhereUniqueInput)
    where!: move_battle_stylesWhereUniqueInput;
}
