import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_battle_style_preferencesNature_idMove_battle_style_idCompoundUniqueInput } from './nature-battle-style-preferences-nature-id-move-battle-style-id-compound-unique.input';

@InputType()
export class nature_battle_style_preferencesWhereUniqueInput {

    @Field(() => nature_battle_style_preferencesNature_idMove_battle_style_idCompoundUniqueInput, {nullable:true})
    nature_id_move_battle_style_id?: nature_battle_style_preferencesNature_idMove_battle_style_idCompoundUniqueInput;
}
