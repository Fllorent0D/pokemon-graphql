import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_proseCreateWithoutAbilitiesInput } from './ability-prose-create-without-abilities.input';
import { Type } from 'class-transformer';
import { ability_proseCreateOrConnectWithoutAbilitiesInput } from './ability-prose-create-or-connect-without-abilities.input';
import { ability_proseUpsertWithWhereUniqueWithoutAbilitiesInput } from './ability-prose-upsert-with-where-unique-without-abilities.input';
import { ability_proseWhereUniqueInput } from './ability-prose-where-unique.input';
import { ability_proseUpdateWithWhereUniqueWithoutAbilitiesInput } from './ability-prose-update-with-where-unique-without-abilities.input';
import { ability_proseUpdateManyWithWhereWithoutAbilitiesInput } from './ability-prose-update-many-with-where-without-abilities.input';
import { ability_proseScalarWhereInput } from './ability-prose-scalar-where.input';

@InputType()
export class ability_proseUncheckedUpdateManyWithoutAbilitiesNestedInput {

    @Field(() => [ability_proseCreateWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_proseCreateWithoutAbilitiesInput)
    create?: Array<ability_proseCreateWithoutAbilitiesInput>;

    @Field(() => [ability_proseCreateOrConnectWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_proseCreateOrConnectWithoutAbilitiesInput)
    connectOrCreate?: Array<ability_proseCreateOrConnectWithoutAbilitiesInput>;

    @Field(() => [ability_proseUpsertWithWhereUniqueWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_proseUpsertWithWhereUniqueWithoutAbilitiesInput)
    upsert?: Array<ability_proseUpsertWithWhereUniqueWithoutAbilitiesInput>;

    @Field(() => [ability_proseWhereUniqueInput], {nullable:true})
    @Type(() => ability_proseWhereUniqueInput)
    set?: Array<ability_proseWhereUniqueInput>;

    @Field(() => [ability_proseWhereUniqueInput], {nullable:true})
    @Type(() => ability_proseWhereUniqueInput)
    disconnect?: Array<ability_proseWhereUniqueInput>;

    @Field(() => [ability_proseWhereUniqueInput], {nullable:true})
    @Type(() => ability_proseWhereUniqueInput)
    delete?: Array<ability_proseWhereUniqueInput>;

    @Field(() => [ability_proseWhereUniqueInput], {nullable:true})
    @Type(() => ability_proseWhereUniqueInput)
    connect?: Array<ability_proseWhereUniqueInput>;

    @Field(() => [ability_proseUpdateWithWhereUniqueWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_proseUpdateWithWhereUniqueWithoutAbilitiesInput)
    update?: Array<ability_proseUpdateWithWhereUniqueWithoutAbilitiesInput>;

    @Field(() => [ability_proseUpdateManyWithWhereWithoutAbilitiesInput], {nullable:true})
    @Type(() => ability_proseUpdateManyWithWhereWithoutAbilitiesInput)
    updateMany?: Array<ability_proseUpdateManyWithWhereWithoutAbilitiesInput>;

    @Field(() => [ability_proseScalarWhereInput], {nullable:true})
    @Type(() => ability_proseScalarWhereInput)
    deleteMany?: Array<ability_proseScalarWhereInput>;
}
