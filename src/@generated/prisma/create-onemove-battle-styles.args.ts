import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_battle_stylesCreateInput } from '../move-battle-styles/move-battle-styles-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveBattleStylesArgs {

    @Field(() => move_battle_stylesCreateInput, {nullable:false})
    @Type(() => move_battle_stylesCreateInput)
    data!: move_battle_stylesCreateInput;
}
