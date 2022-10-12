import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { nature_battle_style_preferencesUncheckedCreateNestedManyWithoutNaturesInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-unchecked-create-nested-many-without-natures.input';
import { nature_namesUncheckedCreateNestedManyWithoutNaturesInput } from '../nature-names/nature-names-unchecked-create-nested-many-without-natures.input';

@InputType()
export class naturesUncheckedCreateWithoutNature_pokeathlon_statsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    decreased_stat_id!: number;

    @Field(() => Int, {nullable:false})
    increased_stat_id!: number;

    @Field(() => Int, {nullable:false})
    hates_flavor_id!: number;

    @Field(() => Int, {nullable:false})
    likes_flavor_id!: number;

    @Field(() => nature_battle_style_preferencesUncheckedCreateNestedManyWithoutNaturesInput, {nullable:true})
    nature_battle_style_preferences?: nature_battle_style_preferencesUncheckedCreateNestedManyWithoutNaturesInput;

    @Field(() => nature_namesUncheckedCreateNestedManyWithoutNaturesInput, {nullable:true})
    nature_names?: nature_namesUncheckedCreateNestedManyWithoutNaturesInput;
}
