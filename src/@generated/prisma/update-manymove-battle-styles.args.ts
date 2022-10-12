import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_battle_stylesUpdateManyMutationInput } from '../move-battle-styles/move-battle-styles-update-many-mutation.input';
import { Type } from 'class-transformer';
import { move_battle_stylesWhereInput } from '../move-battle-styles/move-battle-styles-where.input';

@ArgsType()
export class UpdateManymoveBattleStylesArgs {

    @Field(() => move_battle_stylesUpdateManyMutationInput, {nullable:false})
    @Type(() => move_battle_stylesUpdateManyMutationInput)
    data!: move_battle_stylesUpdateManyMutationInput;

    @Field(() => move_battle_stylesWhereInput, {nullable:true})
    @Type(() => move_battle_stylesWhereInput)
    where?: move_battle_stylesWhereInput;
}
