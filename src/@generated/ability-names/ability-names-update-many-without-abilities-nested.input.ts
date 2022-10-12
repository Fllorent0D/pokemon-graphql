import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_namesCreateWithoutAbilitiesInput } from './ability-names-create-without-abilities.input';
import { Type } from 'class-transformer';
import { ability_namesCreateOrConnectWithoutAbilitiesInput } from './ability-names-create-or-connect-without-abilities.input';
import { ability_namesUpsertWithWhereUniqueWithoutAbilitiesInput } from './ability-names-upsert-with-where-unique-without-abilities.input';
import { ability_namesWhereUniqueInput } from './ability-names-where-unique.input';
import { ability_namesUpdateWithWhereUniqueWithoutAbilitiesInput } from './ability-names-update-with-where-unique-without-abilities.input';
import { ability_namesUpdateManyWithWhereWithoutAbilitiesInput } from './ability-names-update-many-with-where-without-abilities.input';
import { ability_namesScalarWhereInput } from './ability-names-scalar-where.input';

@InputType()
export class ability_namesUpdateManyWithoutAbilitiesNestedInput {

    @Field(() => [ability_namesCreateWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_namesCreateWithoutAbilitiesInput)
    create?: Array<ability_namesCreateWithoutAbilitiesInput>;

    @Field(() => [ability_namesCreateOrConnectWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_namesCreateOrConnectWithoutAbilitiesInput)
    connectOrCreate?: Array<ability_namesCreateOrConnectWithoutAbilitiesInput>;

    @Field(() => [ability_namesUpsertWithWhereUniqueWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_namesUpsertWithWhereUniqueWithoutAbilitiesInput)
    upsert?: Array<ability_namesUpsertWithWhereUniqueWithoutAbilitiesInput>;

    @Field(() => [ability_namesWhereUniqueInput], {nullable:true})
    @Type(() => ability_namesWhereUniqueInput)
    set?: Array<ability_namesWhereUniqueInput>;

    @Field(() => [ability_namesWhereUniqueInput], {nullable:true})
    @Type(() => ability_namesWhereUniqueInput)
    disconnect?: Array<ability_namesWhereUniqueInput>;

    @Field(() => [ability_namesWhereUniqueInput], {nullable:true})
    @Type(() => ability_namesWhereUniqueInput)
    delete?: Array<ability_namesWhereUniqueInput>;

    @Field(() => [ability_namesWhereUniqueInput], {nullable:true})
    @Type(() => ability_namesWhereUniqueInput)
    connect?: Array<ability_namesWhereUniqueInput>;

    @Field(() => [ability_namesUpdateWithWhereUniqueWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_namesUpdateWithWhereUniqueWithoutAbilitiesInput)
    update?: Array<ability_namesUpdateWithWhereUniqueWithoutAbilitiesInput>;

    @Field(() => [ability_namesUpdateManyWithWhereWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_namesUpdateManyWithWhereWithoutAbilitiesInput)
    updateMany?: Array<ability_namesUpdateManyWithWhereWithoutAbilitiesInput>;

    @Field(() => [ability_namesScalarWhereInput], {nullable:true})
    @Type(() => ability_namesScalarWhereInput)
    deleteMany?: Array<ability_namesScalarWhereInput>;
}
