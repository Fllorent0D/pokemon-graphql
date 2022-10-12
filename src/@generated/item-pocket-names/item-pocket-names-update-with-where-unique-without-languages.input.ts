import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_pocket_namesWhereUniqueInput } from './item-pocket-names-where-unique.input';
import { Type } from 'class-transformer';
import { item_pocket_namesUpdateWithoutLanguagesInput } from './item-pocket-names-update-without-languages.input';

@InputType()
export class item_pocket_namesUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => item_pocket_namesWhereUniqueInput, {nullable:false})
    @Type(() => item_pocket_namesWhereUniqueInput)
    where!: item_pocket_namesWhereUniqueInput;

    @Field(() => item_pocket_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => item_pocket_namesUpdateWithoutLanguagesInput)
    data!: item_pocket_namesUpdateWithoutLanguagesInput;
}
