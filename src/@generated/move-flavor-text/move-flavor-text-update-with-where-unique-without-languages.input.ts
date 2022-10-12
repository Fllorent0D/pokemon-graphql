import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flavor_textWhereUniqueInput } from './move-flavor-text-where-unique.input';
import { Type } from 'class-transformer';
import { move_flavor_textUpdateWithoutLanguagesInput } from './move-flavor-text-update-without-languages.input';

@InputType()
export class move_flavor_textUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => move_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => move_flavor_textWhereUniqueInput)
    where!: move_flavor_textWhereUniqueInput;

    @Field(() => move_flavor_textUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => move_flavor_textUpdateWithoutLanguagesInput)
    data!: move_flavor_textUpdateWithoutLanguagesInput;
}
