import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flavor_summariesCreateWithoutLanguagesInput } from './move-flavor-summaries-create-without-languages.input';
import { Type } from 'class-transformer';
import { move_flavor_summariesCreateOrConnectWithoutLanguagesInput } from './move-flavor-summaries-create-or-connect-without-languages.input';
import { move_flavor_summariesUpsertWithWhereUniqueWithoutLanguagesInput } from './move-flavor-summaries-upsert-with-where-unique-without-languages.input';
import { move_flavor_summariesWhereUniqueInput } from './move-flavor-summaries-where-unique.input';
import { move_flavor_summariesUpdateWithWhereUniqueWithoutLanguagesInput } from './move-flavor-summaries-update-with-where-unique-without-languages.input';
import { move_flavor_summariesUpdateManyWithWhereWithoutLanguagesInput } from './move-flavor-summaries-update-many-with-where-without-languages.input';
import { move_flavor_summariesScalarWhereInput } from './move-flavor-summaries-scalar-where.input';

@InputType()
export class move_flavor_summariesUncheckedUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [move_flavor_summariesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => move_flavor_summariesCreateWithoutLanguagesInput)
    create?: Array<move_flavor_summariesCreateWithoutLanguagesInput>;

    @Field(() => [move_flavor_summariesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => move_flavor_summariesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<move_flavor_summariesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [move_flavor_summariesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => move_flavor_summariesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<move_flavor_summariesUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [move_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_summariesWhereUniqueInput)
    set?: Array<move_flavor_summariesWhereUniqueInput>;

    @Field(() => [move_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_summariesWhereUniqueInput)
    disconnect?: Array<move_flavor_summariesWhereUniqueInput>;

    @Field(() => [move_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_summariesWhereUniqueInput)
    delete?: Array<move_flavor_summariesWhereUniqueInput>;

    @Field(() => [move_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_summariesWhereUniqueInput)
    connect?: Array<move_flavor_summariesWhereUniqueInput>;

    @Field(() => [move_flavor_summariesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => move_flavor_summariesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<move_flavor_summariesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [move_flavor_summariesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => move_flavor_summariesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<move_flavor_summariesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [move_flavor_summariesScalarWhereInput], {nullable:true})
    @Type(() => move_flavor_summariesScalarWhereInput)
    deleteMany?: Array<move_flavor_summariesScalarWhereInput>;
}
