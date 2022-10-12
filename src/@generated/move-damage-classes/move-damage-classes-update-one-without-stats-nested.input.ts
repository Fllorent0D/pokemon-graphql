import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_classesCreateWithoutStatsInput } from './move-damage-classes-create-without-stats.input';
import { Type } from 'class-transformer';
import { move_damage_classesCreateOrConnectWithoutStatsInput } from './move-damage-classes-create-or-connect-without-stats.input';
import { move_damage_classesUpsertWithoutStatsInput } from './move-damage-classes-upsert-without-stats.input';
import { move_damage_classesWhereUniqueInput } from './move-damage-classes-where-unique.input';
import { move_damage_classesUpdateWithoutStatsInput } from './move-damage-classes-update-without-stats.input';

@InputType()
export class move_damage_classesUpdateOneWithoutStatsNestedInput {

    @Field(() => move_damage_classesCreateWithoutStatsInput, {nullable:true})
    @Type(() => move_damage_classesCreateWithoutStatsInput)
    create?: move_damage_classesCreateWithoutStatsInput;

    @Field(() => move_damage_classesCreateOrConnectWithoutStatsInput, {nullable:true})
    @Type(() => move_damage_classesCreateOrConnectWithoutStatsInput)
    connectOrCreate?: move_damage_classesCreateOrConnectWithoutStatsInput;

    @Field(() => move_damage_classesUpsertWithoutStatsInput, {nullable:true})
    @Type(() => move_damage_classesUpsertWithoutStatsInput)
    upsert?: move_damage_classesUpsertWithoutStatsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => move_damage_classesWhereUniqueInput, {nullable:true})
    @Type(() => move_damage_classesWhereUniqueInput)
    connect?: move_damage_classesWhereUniqueInput;

    @Field(() => move_damage_classesUpdateWithoutStatsInput, {nullable:true})
    @Type(() => move_damage_classesUpdateWithoutStatsInput)
    update?: move_damage_classesUpdateWithoutStatsInput;
}
