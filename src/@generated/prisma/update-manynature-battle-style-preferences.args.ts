import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_battle_style_preferencesUpdateManyMutationInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-update-many-mutation.input';
import { Type } from 'class-transformer';
import { nature_battle_style_preferencesWhereInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-where.input';

@ArgsType()
export class UpdateManynatureBattleStylePreferencesArgs {

    @Field(() => nature_battle_style_preferencesUpdateManyMutationInput, {nullable:false})
    @Type(() => nature_battle_style_preferencesUpdateManyMutationInput)
    data!: nature_battle_style_preferencesUpdateManyMutationInput;

    @Field(() => nature_battle_style_preferencesWhereInput, {nullable:true})
    @Type(() => nature_battle_style_preferencesWhereInput)
    where?: nature_battle_style_preferencesWhereInput;
}
