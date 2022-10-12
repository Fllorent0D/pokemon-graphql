import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_ailment_namesWhereUniqueInput } from './move-meta-ailment-names-where-unique.input';
import { Type } from 'class-transformer';
import { move_meta_ailment_namesUpdateWithoutLanguagesInput } from './move-meta-ailment-names-update-without-languages.input';

@InputType()
export class move_meta_ailment_namesUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => move_meta_ailment_namesWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_ailment_namesWhereUniqueInput)
    where!: move_meta_ailment_namesWhereUniqueInput;

    @Field(() => move_meta_ailment_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => move_meta_ailment_namesUpdateWithoutLanguagesInput)
    data!: move_meta_ailment_namesUpdateWithoutLanguagesInput;
}
