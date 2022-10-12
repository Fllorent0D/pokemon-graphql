import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { nature_namesUncheckedCreateNestedManyWithoutNaturesInput } from '../nature-names/nature-names-unchecked-create-nested-many-without-natures.input';
import { nature_pokeathlon_statsUncheckedCreateNestedManyWithoutNaturesInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-unchecked-create-nested-many-without-natures.input';

@InputType()
export class naturesUncheckedCreateWithoutNature_battle_style_preferencesInput {

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

    @Field(() => nature_namesUncheckedCreateNestedManyWithoutNaturesInput, {nullable:true})
    nature_names?: nature_namesUncheckedCreateNestedManyWithoutNaturesInput;

    @Field(() => nature_pokeathlon_statsUncheckedCreateNestedManyWithoutNaturesInput, {nullable:true})
    nature_pokeathlon_stats?: nature_pokeathlon_statsUncheckedCreateNestedManyWithoutNaturesInput;
}
