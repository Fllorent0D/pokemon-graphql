import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flavor_summariesWhereUniqueInput } from './item-flavor-summaries-where-unique.input';
import { Type } from 'class-transformer';
import { item_flavor_summariesUpdateWithoutLanguagesInput } from './item-flavor-summaries-update-without-languages.input';
import { item_flavor_summariesCreateWithoutLanguagesInput } from './item-flavor-summaries-create-without-languages.input';

@InputType()
export class item_flavor_summariesUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => item_flavor_summariesWhereUniqueInput, {nullable:false})
    @Type(() => item_flavor_summariesWhereUniqueInput)
    where!: item_flavor_summariesWhereUniqueInput;

    @Field(() => item_flavor_summariesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => item_flavor_summariesUpdateWithoutLanguagesInput)
    update!: item_flavor_summariesUpdateWithoutLanguagesInput;

    @Field(() => item_flavor_summariesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => item_flavor_summariesCreateWithoutLanguagesInput)
    create!: item_flavor_summariesCreateWithoutLanguagesInput;
}
