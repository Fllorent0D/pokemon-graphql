import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flavor_summariesWhereUniqueInput } from './move-flavor-summaries-where-unique.input';
import { Type } from 'class-transformer';
import { move_flavor_summariesUpdateWithoutLanguagesInput } from './move-flavor-summaries-update-without-languages.input';

@InputType()
export class move_flavor_summariesUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => move_flavor_summariesWhereUniqueInput, {nullable:false})
    @Type(() => move_flavor_summariesWhereUniqueInput)
    where!: move_flavor_summariesWhereUniqueInput;

    @Field(() => move_flavor_summariesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => move_flavor_summariesUpdateWithoutLanguagesInput)
    data!: move_flavor_summariesUpdateWithoutLanguagesInput;
}
