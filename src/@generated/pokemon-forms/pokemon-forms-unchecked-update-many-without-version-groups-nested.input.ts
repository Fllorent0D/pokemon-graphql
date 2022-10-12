import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_formsCreateWithoutVersion_groupsInput } from './pokemon-forms-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { pokemon_formsCreateOrConnectWithoutVersion_groupsInput } from './pokemon-forms-create-or-connect-without-version-groups.input';
import { pokemon_formsUpsertWithWhereUniqueWithoutVersion_groupsInput } from './pokemon-forms-upsert-with-where-unique-without-version-groups.input';
import { pokemon_formsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { pokemon_formsUpdateWithWhereUniqueWithoutVersion_groupsInput } from './pokemon-forms-update-with-where-unique-without-version-groups.input';
import { pokemon_formsUpdateManyWithWhereWithoutVersion_groupsInput } from './pokemon-forms-update-many-with-where-without-version-groups.input';
import { pokemon_formsScalarWhereInput } from './pokemon-forms-scalar-where.input';

@InputType()
export class pokemon_formsUncheckedUpdateManyWithoutVersion_groupsNestedInput {

    @Field(() => [pokemon_formsCreateWithoutVersion_groupsInput], {nullable:true})
    @Type(() => pokemon_formsCreateWithoutVersion_groupsInput)
    create?: Array<pokemon_formsCreateWithoutVersion_groupsInput>;

    @Field(() => [pokemon_formsCreateOrConnectWithoutVersion_groupsInput], {nullable:true})
    @Type(() => pokemon_formsCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: Array<pokemon_formsCreateOrConnectWithoutVersion_groupsInput>;

    @Field(() => [pokemon_formsUpsertWithWhereUniqueWithoutVersion_groupsInput], {nullable:true})
    @Type(() => pokemon_formsUpsertWithWhereUniqueWithoutVersion_groupsInput)
    upsert?: Array<pokemon_formsUpsertWithWhereUniqueWithoutVersion_groupsInput>;

    @Field(() => [pokemon_formsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_formsWhereUniqueInput)
    set?: Array<pokemon_formsWhereUniqueInput>;

    @Field(() => [pokemon_formsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_formsWhereUniqueInput)
    disconnect?: Array<pokemon_formsWhereUniqueInput>;

    @Field(() => [pokemon_formsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_formsWhereUniqueInput)
    delete?: Array<pokemon_formsWhereUniqueInput>;

    @Field(() => [pokemon_formsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_formsWhereUniqueInput)
    connect?: Array<pokemon_formsWhereUniqueInput>;

    @Field(() => [pokemon_formsUpdateWithWhereUniqueWithoutVersion_groupsInput], {nullable:true})
    @Type(() => pokemon_formsUpdateWithWhereUniqueWithoutVersion_groupsInput)
    update?: Array<pokemon_formsUpdateWithWhereUniqueWithoutVersion_groupsInput>;

    @Field(() => [pokemon_formsUpdateManyWithWhereWithoutVersion_groupsInput], {nullable:true})
    @Type(() => pokemon_formsUpdateManyWithWhereWithoutVersion_groupsInput)
    updateMany?: Array<pokemon_formsUpdateManyWithWhereWithoutVersion_groupsInput>;

    @Field(() => [pokemon_formsScalarWhereInput], {nullable:true})
    @Type(() => pokemon_formsScalarWhereInput)
    deleteMany?: Array<pokemon_formsScalarWhereInput>;
}
