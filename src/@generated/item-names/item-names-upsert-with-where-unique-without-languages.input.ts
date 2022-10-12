import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_namesWhereUniqueInput } from './item-names-where-unique.input';
import { Type } from 'class-transformer';
import { item_namesUpdateWithoutLanguagesInput } from './item-names-update-without-languages.input';
import { item_namesCreateWithoutLanguagesInput } from './item-names-create-without-languages.input';

@InputType()
export class item_namesUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => item_namesWhereUniqueInput, {nullable:false})
    @Type(() => item_namesWhereUniqueInput)
    where!: item_namesWhereUniqueInput;

    @Field(() => item_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => item_namesUpdateWithoutLanguagesInput)
    update!: item_namesUpdateWithoutLanguagesInput;

    @Field(() => item_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => item_namesCreateWithoutLanguagesInput)
    create!: item_namesCreateWithoutLanguagesInput;
}
