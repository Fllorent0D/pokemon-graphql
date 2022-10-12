import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesCreateWithoutContest_types_contest_typesTonatures_hates_flavor_idInput } from './natures-create-without-contest-types-contest-types-tonatures-hates-flavor-id.input';
import { Type } from 'class-transformer';
import { naturesCreateOrConnectWithoutContest_types_contest_typesTonatures_hates_flavor_idInput } from './natures-create-or-connect-without-contest-types-contest-types-tonatures-hates-flavor-id.input';
import { naturesUpsertWithWhereUniqueWithoutContest_types_contest_typesTonatures_hates_flavor_idInput } from './natures-upsert-with-where-unique-without-contest-types-contest-types-tonatures-hates-flavor-id.input';
import { naturesWhereUniqueInput } from './natures-where-unique.input';
import { naturesUpdateWithWhereUniqueWithoutContest_types_contest_typesTonatures_hates_flavor_idInput } from './natures-update-with-where-unique-without-contest-types-contest-types-tonatures-hates-flavor-id.input';
import { naturesUpdateManyWithWhereWithoutContest_types_contest_typesTonatures_hates_flavor_idInput } from './natures-update-many-with-where-without-contest-types-contest-types-tonatures-hates-flavor-id.input';
import { naturesScalarWhereInput } from './natures-scalar-where.input';

@InputType()
export class naturesUncheckedUpdateManyWithoutContest_types_contest_typesTonatures_hates_flavor_idNestedInput {

    @Field(() => [naturesCreateWithoutContest_types_contest_typesTonatures_hates_flavor_idInput], {nullable:true})
    @Type(() => naturesCreateWithoutContest_types_contest_typesTonatures_hates_flavor_idInput)
    create?: Array<naturesCreateWithoutContest_types_contest_typesTonatures_hates_flavor_idInput>;

    @Field(() => [naturesCreateOrConnectWithoutContest_types_contest_typesTonatures_hates_flavor_idInput], {nullable:true})
    @Type(() => naturesCreateOrConnectWithoutContest_types_contest_typesTonatures_hates_flavor_idInput)
    connectOrCreate?: Array<naturesCreateOrConnectWithoutContest_types_contest_typesTonatures_hates_flavor_idInput>;

    @Field(() => [naturesUpsertWithWhereUniqueWithoutContest_types_contest_typesTonatures_hates_flavor_idInput], {nullable:true})
    @Type(() => naturesUpsertWithWhereUniqueWithoutContest_types_contest_typesTonatures_hates_flavor_idInput)
    upsert?: Array<naturesUpsertWithWhereUniqueWithoutContest_types_contest_typesTonatures_hates_flavor_idInput>;

    @Field(() => [naturesWhereUniqueInput], {nullable:true})
    @Type(() => naturesWhereUniqueInput)
    set?: Array<naturesWhereUniqueInput>;

    @Field(() => [naturesWhereUniqueInput], {nullable:true})
    @Type(() => naturesWhereUniqueInput)
    disconnect?: Array<naturesWhereUniqueInput>;

    @Field(() => [naturesWhereUniqueInput], {nullable:true})
    @Type(() => naturesWhereUniqueInput)
    delete?: Array<naturesWhereUniqueInput>;

    @Field(() => [naturesWhereUniqueInput], {nullable:true})
    @Type(() => naturesWhereUniqueInput)
    connect?: Array<naturesWhereUniqueInput>;

    @Field(() => [naturesUpdateWithWhereUniqueWithoutContest_types_contest_typesTonatures_hates_flavor_idInput], {nullable:true})
    @Type(() => naturesUpdateWithWhereUniqueWithoutContest_types_contest_typesTonatures_hates_flavor_idInput)
    update?: Array<naturesUpdateWithWhereUniqueWithoutContest_types_contest_typesTonatures_hates_flavor_idInput>;

    @Field(() => [naturesUpdateManyWithWhereWithoutContest_types_contest_typesTonatures_hates_flavor_idInput], {nullable:true})
    @Type(() => naturesUpdateManyWithWhereWithoutContest_types_contest_typesTonatures_hates_flavor_idInput)
    updateMany?: Array<naturesUpdateManyWithWhereWithoutContest_types_contest_typesTonatures_hates_flavor_idInput>;

    @Field(() => [naturesScalarWhereInput], {nullable:true})
    @Type(() => naturesScalarWhereInput)
    deleteMany?: Array<naturesScalarWhereInput>;
}
