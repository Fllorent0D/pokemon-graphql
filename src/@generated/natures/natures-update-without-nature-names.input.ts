import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { contest_typesUpdateOneRequiredWithoutNatures_contest_typesTonatures_likes_flavor_idNestedInput } from '../contest-types/contest-types-update-one-required-without-natures-contest-types-tonatures-likes-flavor-id-nested.input';
import { contest_typesUpdateOneRequiredWithoutNatures_contest_typesTonatures_hates_flavor_idNestedInput } from '../contest-types/contest-types-update-one-required-without-natures-contest-types-tonatures-hates-flavor-id-nested.input';
import { statsUpdateOneRequiredWithoutNatures_natures_increased_stat_idTostatsNestedInput } from '../stats/stats-update-one-required-without-natures-natures-increased-stat-id-tostats-nested.input';
import { statsUpdateOneRequiredWithoutNatures_natures_decreased_stat_idTostatsNestedInput } from '../stats/stats-update-one-required-without-natures-natures-decreased-stat-id-tostats-nested.input';
import { nature_battle_style_preferencesUpdateManyWithoutNaturesNestedInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-update-many-without-natures-nested.input';
import { nature_pokeathlon_statsUpdateManyWithoutNaturesNestedInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-update-many-without-natures-nested.input';

@InputType()
export class naturesUpdateWithoutNature_namesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => contest_typesUpdateOneRequiredWithoutNatures_contest_typesTonatures_likes_flavor_idNestedInput, {nullable:true})
    contest_types_contest_typesTonatures_likes_flavor_id?: contest_typesUpdateOneRequiredWithoutNatures_contest_typesTonatures_likes_flavor_idNestedInput;

    @Field(() => contest_typesUpdateOneRequiredWithoutNatures_contest_typesTonatures_hates_flavor_idNestedInput, {nullable:true})
    contest_types_contest_typesTonatures_hates_flavor_id?: contest_typesUpdateOneRequiredWithoutNatures_contest_typesTonatures_hates_flavor_idNestedInput;

    @Field(() => statsUpdateOneRequiredWithoutNatures_natures_increased_stat_idTostatsNestedInput, {nullable:true})
    stats_natures_increased_stat_idTostats?: statsUpdateOneRequiredWithoutNatures_natures_increased_stat_idTostatsNestedInput;

    @Field(() => statsUpdateOneRequiredWithoutNatures_natures_decreased_stat_idTostatsNestedInput, {nullable:true})
    stats_natures_decreased_stat_idTostats?: statsUpdateOneRequiredWithoutNatures_natures_decreased_stat_idTostatsNestedInput;

    @Field(() => nature_battle_style_preferencesUpdateManyWithoutNaturesNestedInput, {nullable:true})
    nature_battle_style_preferences?: nature_battle_style_preferencesUpdateManyWithoutNaturesNestedInput;

    @Field(() => nature_pokeathlon_statsUpdateManyWithoutNaturesNestedInput, {nullable:true})
    nature_pokeathlon_stats?: nature_pokeathlon_statsUpdateManyWithoutNaturesNestedInput;
}
