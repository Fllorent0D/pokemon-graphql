import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_namesWhereUniqueInput } from './item-names-where-unique.input';
import { Type } from 'class-transformer';
import { item_namesUpdateWithoutLanguagesInput } from './item-names-update-without-languages.input';

@InputType()
export class item_namesUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => item_namesWhereUniqueInput, {nullable:false})
    @Type(() => item_namesWhereUniqueInput)
    where!: item_namesWhereUniqueInput;

    @Field(() => item_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => item_namesUpdateWithoutLanguagesInput)
    data!: item_namesUpdateWithoutLanguagesInput;
}
