import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutMove_meta_ailment_namesInput } from './languages-update-without-move-meta-ailment-names.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutMove_meta_ailment_namesInput } from './languages-create-without-move-meta-ailment-names.input';

@InputType()
export class languagesUpsertWithoutMove_meta_ailment_namesInput {

    @Field(() => languagesUpdateWithoutMove_meta_ailment_namesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutMove_meta_ailment_namesInput)
    update!: languagesUpdateWithoutMove_meta_ailment_namesInput;

    @Field(() => languagesCreateWithoutMove_meta_ailment_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutMove_meta_ailment_namesInput)
    create!: languagesCreateWithoutMove_meta_ailment_namesInput;
}
