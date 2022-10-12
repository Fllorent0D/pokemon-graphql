import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_battle_style_proseUpdateManyMutationInput } from '../move-battle-style-prose/move-battle-style-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { move_battle_style_proseWhereInput } from '../move-battle-style-prose/move-battle-style-prose-where.input';

@ArgsType()
export class UpdateManymoveBattleStyleProseArgs {

    @Field(() => move_battle_style_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => move_battle_style_proseUpdateManyMutationInput)
    data!: move_battle_style_proseUpdateManyMutationInput;

    @Field(() => move_battle_style_proseWhereInput, {nullable:true})
    @Type(() => move_battle_style_proseWhereInput)
    where?: move_battle_style_proseWhereInput;
}
