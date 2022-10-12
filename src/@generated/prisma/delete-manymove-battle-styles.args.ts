import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_battle_stylesWhereInput } from '../move-battle-styles/move-battle-styles-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveBattleStylesArgs {

    @Field(() => move_battle_stylesWhereInput, {nullable:true})
    @Type(() => move_battle_stylesWhereInput)
    where?: move_battle_stylesWhereInput;
}
