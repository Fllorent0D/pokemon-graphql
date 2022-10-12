import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flavor_summariesCreateWithoutLanguagesInput } from './item-flavor-summaries-create-without-languages.input';
import { Type } from 'class-transformer';
import { item_flavor_summariesCreateOrConnectWithoutLanguagesInput } from './item-flavor-summaries-create-or-connect-without-languages.input';
import { item_flavor_summariesUpsertWithWhereUniqueWithoutLanguagesInput } from './item-flavor-summaries-upsert-with-where-unique-without-languages.input';
import { item_flavor_summariesWhereUniqueInput } from './item-flavor-summaries-where-unique.input';
import { item_flavor_summariesUpdateWithWhereUniqueWithoutLanguagesInput } from './item-flavor-summaries-update-with-where-unique-without-languages.input';
import { item_flavor_summariesUpdateManyWithWhereWithoutLanguagesInput } from './item-flavor-summaries-update-many-with-where-without-languages.input';
import { item_flavor_summariesScalarWhereInput } from './item-flavor-summaries-scalar-where.input';

@InputType()
export class item_flavor_summariesUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [item_flavor_summariesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => item_flavor_summariesCreateWithoutLanguagesInput)
    create?: Array<item_flavor_summariesCreateWithoutLanguagesInput>;

    @Field(() => [item_flavor_summariesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => item_flavor_summariesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<item_flavor_summariesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [item_flavor_summariesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => item_flavor_summariesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<item_flavor_summariesUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [item_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => item_flavor_summariesWhereUniqueInput)
    set?: Array<item_flavor_summariesWhereUniqueInput>;

    @Field(() => [item_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => item_flavor_summariesWhereUniqueInput)
    disconnect?: Array<item_flavor_summariesWhereUniqueInput>;

    @Field(() => [item_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => item_flavor_summariesWhereUniqueInput)
    delete?: Array<item_flavor_summariesWhereUniqueInput>;

    @Field(() => [item_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => item_flavor_summariesWhereUniqueInput)
    connect?: Array<item_flavor_summariesWhereUniqueInput>;

    @Field(() => [item_flavor_summariesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => item_flavor_summariesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<item_flavor_summariesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [item_flavor_summariesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => item_flavor_summariesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<item_flavor_summariesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [item_flavor_summariesScalarWhereInput], {nullable:true})
    @Type(() => item_flavor_summariesScalarWhereInput)
    deleteMany?: Array<item_flavor_summariesScalarWhereInput>;
}
