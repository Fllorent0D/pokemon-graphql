import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_flavor_textCreateWithoutAbilitiesInput } from './ability-flavor-text-create-without-abilities.input';
import { Type } from 'class-transformer';
import { ability_flavor_textCreateOrConnectWithoutAbilitiesInput } from './ability-flavor-text-create-or-connect-without-abilities.input';
import { ability_flavor_textUpsertWithWhereUniqueWithoutAbilitiesInput } from './ability-flavor-text-upsert-with-where-unique-without-abilities.input';
import { ability_flavor_textWhereUniqueInput } from './ability-flavor-text-where-unique.input';
import { ability_flavor_textUpdateWithWhereUniqueWithoutAbilitiesInput } from './ability-flavor-text-update-with-where-unique-without-abilities.input';
import { ability_flavor_textUpdateManyWithWhereWithoutAbilitiesInput } from './ability-flavor-text-update-many-with-where-without-abilities.input';
import { ability_flavor_textScalarWhereInput } from './ability-flavor-text-scalar-where.input';

@InputType()
export class ability_flavor_textUncheckedUpdateManyWithoutAbilitiesNestedInput {

    @Field(() => [ability_flavor_textCreateWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_flavor_textCreateWithoutAbilitiesInput)
    create?: Array<ability_flavor_textCreateWithoutAbilitiesInput>;

    @Field(() => [ability_flavor_textCreateOrConnectWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_flavor_textCreateOrConnectWithoutAbilitiesInput)
    connectOrCreate?: Array<ability_flavor_textCreateOrConnectWithoutAbilitiesInput>;

    @Field(() => [ability_flavor_textUpsertWithWhereUniqueWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_flavor_textUpsertWithWhereUniqueWithoutAbilitiesInput)
    upsert?: Array<ability_flavor_textUpsertWithWhereUniqueWithoutAbilitiesInput>;

    @Field(() => [ability_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => ability_flavor_textWhereUniqueInput)
    set?: Array<ability_flavor_textWhereUniqueInput>;

    @Field(() => [ability_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => ability_flavor_textWhereUniqueInput)
    disconnect?: Array<ability_flavor_textWhereUniqueInput>;

    @Field(() => [ability_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => ability_flavor_textWhereUniqueInput)
    delete?: Array<ability_flavor_textWhereUniqueInput>;

    @Field(() => [ability_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => ability_flavor_textWhereUniqueInput)
    connect?: Array<ability_flavor_textWhereUniqueInput>;

    @Field(() => [ability_flavor_textUpdateWithWhereUniqueWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_flavor_textUpdateWithWhereUniqueWithoutAbilitiesInput)
    update?: Array<ability_flavor_textUpdateWithWhereUniqueWithoutAbilitiesInput>;

    @Field(() => [ability_flavor_textUpdateManyWithWhereWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_flavor_textUpdateManyWithWhereWithoutAbilitiesInput)
    updateMany?: Array<ability_flavor_textUpdateManyWithWhereWithoutAbilitiesInput>;

    @Field(() => [ability_flavor_textScalarWhereInput], {nullable:true})
    @Type(() => ability_flavor_textScalarWhereInput)
    deleteMany?: Array<ability_flavor_textScalarWhereInput>;
}
