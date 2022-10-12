import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flavor_summariesWhereUniqueInput } from './item-flavor-summaries-where-unique.input';
import { Type } from 'class-transformer';
import { item_flavor_summariesCreateWithoutLanguagesInput } from './item-flavor-summaries-create-without-languages.input';

@InputType()
export class item_flavor_summariesCreateOrConnectWithoutLanguagesInput {

    @Field(() => item_flavor_summariesWhereUniqueInput, {nullable:false})
    @Type(() => item_flavor_summariesWhereUniqueInput)
    where!: item_flavor_summariesWhereUniqueInput;

    @Field(() => item_flavor_summariesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => item_flavor_summariesCreateWithoutLanguagesInput)
    create!: item_flavor_summariesCreateWithoutLanguagesInput;
}
